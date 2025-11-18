"use client";
import { Button } from "@/components/Button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/Drawer";

import {
  categoryTypes,
  eventTypes,
  priorities,
  ticketTypes,
  type Ticket,
} from "@/data/support/schema";
import React from "react";
import { Input } from "../Input";
import { Label } from "../Label";
import { Textarea } from "../Textarea";

import Cookies from "js-cookie";

type TicketFormData = Partial<Ticket>;

interface TicketDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormPageProps {
  formData: TicketFormData;
  onUpdateForm: (updates: Partial<TicketFormData>) => void;
}

const SummaryItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) => (
  <div className="space-y-1">
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-sm">{value ?? "Not provided"}</p>
  </div>
);

const FormField = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div>
    <Label className="font-medium">{label}</Label>
    <div className="mt-2">{children}</div>
  </div>
);

const FirstPage = ({ formData, onUpdateForm }: FormPageProps) => (
  <>
    <DrawerHeader>
      <DrawerTitle>
        <p>Send Out Mails</p>
        <span className="text-sm font-normal text-gray-500">
          Subject & Mail Body
        </span>
      </DrawerTitle>
    </DrawerHeader>
    <DrawerBody className="-mx-6 space-y-6 overflow-y-scroll border-t border-gray-200 px-6">
      <FormField label="Email Subject">
        <Input
          value={formData.image_description || ""}
          onChange={(e) => onUpdateForm({ image_description: e.target.value })}
          placeholder="Subject"
        ></Input>
      </FormField>

      <FormField label="Email Body">
        <Textarea
          name="description"
          value={formData.description || ""}
          onChange={(e) => onUpdateForm({ description: e.target.value })}
          placeholder="Email body text..."
          className="h-82"
        />
      </FormField>
    </DrawerBody>
  </>
);

const SummaryPage = ({ formData }: { formData: TicketFormData }) => (
  <>
    <DrawerHeader>
      <DrawerTitle>
        <p>Review Post</p>
        <span className="text-sm font-normal text-gray-500">
          Please review all details before submitting
        </span>
      </DrawerTitle>
    </DrawerHeader>
    <DrawerBody className="-mx-6 space-y-4 overflow-y-scroll border-t border-gray-200 px-6">
      <div className="rounded-md border border-gray-200">
        <div className="border-b border-gray-200 p-4">
          <h3 className="font-medium">Mail Information</h3>
          <div className="mt-4 space-y-4">
            <SummaryItem label="Subject" value={formData.title} />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium">Details</h3>
          <div className="mt-4 space-y-4">
            <SummaryItem label="Body" value={formData.description} />
            <SummaryItem
              label="Created"
              value={
                formData.created
                  ? new Date(formData.created).toLocaleString()
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </DrawerBody>
  </>
);

export function TicketDrawer({ open, onOpenChange }: TicketDrawerProps) {
  const [formData, setFormData] = React.useState<TicketFormData>({
    status: "in-progress",
    category: categoryTypes[0].value,
    type: ticketTypes[0].value,
    policyType: eventTypes[0].value,
    priority: priorities[0].value,
    description: "",
    policyNumber: "",
    duration: "0",
    created: new Date().toISOString(),
  });

  const [currentPage, setCurrentPage] = React.useState(1);

  const handleUpdateForm = (updates: Partial<TicketFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleSubmit = async () => {
    const token = Cookies.get("token"); // Make sure token was set here at login

    if (!token) {
      alert("No auth token found. Please log in again.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("subject", formData.image_description || "");
    formDataToSend.append("htmlContent", formData.description || "");

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

    try {
      const res = await fetch(`${baseUrl}/api/newsletter/send`, {
        method: "POST",
        headers: {
          accept: "application/json",
          // Content-Type: "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      const result = await res.json();

      if (!res.ok) {
        console.error("Error creating post:", result);
        alert("Failed to create post: " + (result.message || "Unknown error"));
        return;
      }

      alert("Gallery post created successfully!");
      onOpenChange(false);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the post.");
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <FirstPage formData={formData} onUpdateForm={handleUpdateForm} />
        );
      case 2:
        return <SummaryPage formData={formData} />;

      default:
        return null;
    }
  };

  const renderFooter = () => {
    if (currentPage === 1) {
      return (
        <>
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>

          <Button onClick={() => setCurrentPage(2)}>Review</Button>
        </>
      );
    }
    return (
      <>
        <Button variant="secondary" onClick={() => setCurrentPage(1)}>
          Back
        </Button>
        <Button className="cursor-pointer" onClick={handleSubmit}>
          Create Post
        </Button>
      </>
    );
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="overflow-x-hidden sm:max-w-lg">
        {renderPage()}
        <DrawerFooter className="-mx-6 -mb-2 gap-2 px-6 sm:justify-between">
          {renderFooter()}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
