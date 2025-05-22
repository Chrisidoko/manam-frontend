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
  Select,
  SelectContent,
  SelectItemExtended,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import {
  categoryTypes,
  eventTypes,
  priorities,
  ticketTypes,
  type Category,
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
        <p>Create Post</p>
        <span className="text-sm font-normal text-gray-500">
          Text & Category
        </span>
      </DrawerTitle>
    </DrawerHeader>
    <DrawerBody className="-mx-6 space-y-6 overflow-y-scroll border-t border-gray-200 px-6">
      <FormField label="Title">
        <Input
          value={formData.title || ""}
          onChange={(e) => onUpdateForm({ title: e.target.value })}
          placeholder="Title"
        ></Input>
      </FormField>

      <FormField label="Category">
        <Select
          value={formData.category}
          onValueChange={(value: Category) => onUpdateForm({ category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categoryTypes.map((category) => (
              <SelectItemExtended
                key={category.value}
                value={category.value}
                option={category.name}
              />
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="Author">
        <Input
          value={formData.author || ""}
          onChange={(e) => onUpdateForm({ author: e.target.value })}
          placeholder="Author"
        ></Input>
      </FormField>
    </DrawerBody>
  </>
);

const SecondPage = ({ formData, onUpdateForm }: FormPageProps) => (
  <>
    <DrawerHeader>
      <DrawerTitle>
        <p>Post Details</p>
        <span className="text-sm font-normal text-gray-500">
          Image & Description
        </span>
      </DrawerTitle>
    </DrawerHeader>
    <DrawerBody className="-mx-6 space-y-6 overflow-y-scroll border-t border-gray-200 px-6">
      <FormField label="Image ex.4:3">
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              onUpdateForm({ image: file });
            }
          }}
        />
      </FormField>

      <FormField label="Description">
        <Textarea
          name="description"
          value={formData.description || ""}
          onChange={(e) => onUpdateForm({ description: e.target.value })}
          placeholder="Detailed description of the issue..."
          className="h-72"
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
          <h3 className="font-medium">Post Information</h3>
          <div className="mt-4 space-y-4">
            <SummaryItem label="Title" value={formData.title} />
            <SummaryItem
              label="Category"
              value={
                categoryTypes.find((c) => c.value === formData.category)
                  ?.name ?? undefined
              }
            />
            <SummaryItem label="Author" value={formData.author} />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium">Details</h3>
          <div className="mt-4 space-y-4">
            {formData.image ? (
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Uploaded"
                className="h-32 w-32 rounded object-cover"
              />
            ) : (
              <SummaryItem label="Image" value="No image uploaded" />
            )}
            <SummaryItem
              label="Description"
              value={formData.description || undefined}
            />

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
    formDataToSend.append("title", formData.title || "");
    formDataToSend.append("content", formData.description || "");
    formDataToSend.append("author", formData.author || "");
    formDataToSend.append("category", formData.category || "");
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const res = await fetch(
        "https://mana-event.onrender.com/api/create-blog",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        }
      );

      const result = await res.json();

      if (!res.ok) {
        console.error("Error creating post:", result);
        alert("Failed to create post: " + (result.message || "Unknown error"));
        return;
      }

      alert("Blog post created successfully!");
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
        return (
          <SecondPage formData={formData} onUpdateForm={handleUpdateForm} />
        );
      case 3:
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
          <Button onClick={() => setCurrentPage(2)}>Continue</Button>
        </>
      );
    }
    if (currentPage === 2) {
      return (
        <>
          <Button variant="secondary" onClick={() => setCurrentPage(1)}>
            Back
          </Button>
          <Button onClick={() => setCurrentPage(3)}>Review</Button>
        </>
      );
    }
    return (
      <>
        <Button variant="secondary" onClick={() => setCurrentPage(2)}>
          Back
        </Button>
        <Button onClick={handleSubmit}>Create Post</Button>
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
