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
        <p>Create Event</p>
        <span className="text-sm font-normal text-gray-500">
          Text, Spaces & Category
        </span>
      </DrawerTitle>
    </DrawerHeader>
    <DrawerBody className="-mx-6 space-y-6 overflow-y-scroll border-t border-gray-200 px-6">
      <FormField label="Event Name">
        <Input
          value={formData.event_name || ""}
          onChange={(e) => onUpdateForm({ event_name: e.target.value })}
          placeholder="Name"
        ></Input>
      </FormField>

      <FormField label="Event Location">
        <Input
          value={formData.event_location || ""}
          onChange={(e) => onUpdateForm({ event_location: e.target.value })}
          placeholder="Location"
        ></Input>
      </FormField>

      <FormField label="Event Date">
        <Input
          value={formData.event_date || ""}
          onChange={(e) => onUpdateForm({ event_date: e.target.value })}
          placeholder="ex.2025-05-01"
        ></Input>
      </FormField>

      <FormField label="Event Organizer">
        <Input
          value={formData.organizer || ""}
          onChange={(e) => onUpdateForm({ organizer: e.target.value })}
          placeholder="Event Organizer"
        ></Input>
      </FormField>

      <FormField label="Event Type">
        <Select
          value={formData.category}
          onValueChange={(value: Category) => onUpdateForm({ category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            {eventTypes.map((category) => (
              <SelectItemExtended
                key={category.value}
                value={category.value}
                option={category.name}
              />
            ))}
          </SelectContent>
        </Select>
      </FormField>
      {/* space_available */}
      <FormField label="Spaces available">
        <Input
          value={formData.space_available || ""}
          onChange={(e) => onUpdateForm({ space_available: e.target.value })}
          placeholder="Spaces available"
        ></Input>
      </FormField>
    </DrawerBody>
  </>
);

const SecondPage = ({ formData, onUpdateForm }: FormPageProps) => (
  <>
    <DrawerHeader>
      <DrawerTitle>
        <p>Event Details</p>
        <span className="text-sm font-normal text-gray-500">
          Image, Amount & Description
        </span>
      </DrawerTitle>
    </DrawerHeader>
    <DrawerBody className="-mx-6 space-y-6 overflow-y-scroll border-t border-gray-200 px-6">
      <FormField label="Amount">
        <Input
          value={formData.price || ""}
          onChange={(e) => onUpdateForm({ price: e.target.value })}
          placeholder="ex.5000"
        ></Input>
      </FormField>
      {/* ex.512px by 384px */}
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
          className="h-62"
        />
      </FormField>
    </DrawerBody>
  </>
);

const SummaryPage = ({ formData }: { formData: TicketFormData }) => (
  <>
    <DrawerHeader>
      <DrawerTitle>
        <p>Review Event</p>
        <span className="text-sm font-normal text-gray-500">
          Please review all details before submitting
        </span>
      </DrawerTitle>
    </DrawerHeader>
    <DrawerBody className="-mx-6 space-y-4 overflow-y-scroll border-t border-gray-200 px-6">
      <div className="rounded-md border border-gray-200">
        <div className="border-b border-gray-200 p-4">
          <h3 className="font-medium">Event Information</h3>
          <div className="mt-4 space-y-4">
            <SummaryItem label="Event Name" value={formData.event_name} />

            <SummaryItem
              label="Event Location"
              value={formData.event_location}
            />
            <SummaryItem label="Amount" value={formData.price} />
            <SummaryItem
              label="Space Available"
              value={formData.space_available}
            />
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

type EventFormData = {
  event_name?: string;
  event_organizer?: string;
  event_date?: string;
  event_location?: string;
  event_type?: string;
  space_available?: string;
  price?: string;
  event_image?: File | null;
  event_description?: string;
};

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
    const token = Cookies.get("token");

    if (!token) {
      alert("No auth token found. Please log in again.");
      return;
    }

    const data = new FormData();
    data.append("event_name", formData.event_name || "");
    data.append("event_organizer", formData.organizer || "");
    data.append("event_date", formData.event_date || "");
    data.append("event_location", formData.event_location || "");
    data.append("event_type", formData.category || "");
    data.append("space_available", formData.space_available || "");
    data.append("price", formData.price || "");
    data.append("event_description", formData.description || "");

    if (formData.image) {
      data.append("event_image", formData.image);
    } else {
      // If no image file, send empty string (API expects this field)
      data.append("event_image", "");
    }
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
    try {
      const res = await fetch(`${baseUrl}/api/create-event`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        alert("Failed to create event: " + (result.message || "Unknown error"));
        return;
      }

      alert("Event created successfully!");
      onOpenChange(false);
    } catch (error) {
      alert("An error occurred while creating the event.");
      console.error(error);
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
