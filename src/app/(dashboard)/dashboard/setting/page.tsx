"use client";

import { useState } from "react";


import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  // Promotion settings

  // Notification settings

  return (
    <div className="p-5 w-full bg-white min-h-[80vh]">
      <h1 className="text-2xl font-bold mb-1">Settings</h1>
      <p className="text-muted-foreground mb-6">Customize your account and application preferences.</p>

      <div className="grid grid-cols-1 w-full md:grid-cols-[auto_1fr] gap-6">
        {/* Sidebar */}
        <div className="space-y-1">
          <Button
            variant={activeTab === "general" ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              activeTab === "general" && "bg-primary/40 text-primary hover:bg-primary/20 "
            )}
            onClick={() => setActiveTab("general")}
          >
            General
          </Button>
          <Button
            variant={activeTab === "promotions" ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              activeTab === "promotions" && "bg-primary/40 text-primary hover:bg-primary/20 "
            )}
            onClick={() => setActiveTab("promotions")}
          >
            Promotions
          </Button>
          <Button
            variant={activeTab === "notifications" ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              activeTab === "notifications" && "bg-primary/40 text-primary hover:bg-primary/20 "
            )}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </Button>
        </div>

        {/* Content */}
        <div className="border rounded-lg p-6">
          {/* General Settings */}
          {activeTab === "general" && <>
          <h1>General Settings</h1>
          </>}

          {/* Promotions Settings */}
          {activeTab === "promotions" && <>
          <h1>Promotions Settings</h1>
          </>}

          {/* Notifications Settings */}
          {activeTab === "notifications" && <>
          <h1>Notifications Settings</h1>
          </>}
        </div>
      </div>
    </div>
  );
}
