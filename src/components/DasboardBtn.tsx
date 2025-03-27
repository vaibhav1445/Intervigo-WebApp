"use client";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useUserRole } from "@/hooks/useUserRole";

function DashboardBtn() {
  const {isCandidate,isLoading}=useUserRole()
  if (isCandidate||isLoading) return null;
  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <Sparkles className="size-4" />
        DashBoard
      </Button>
    </Link>
  );
}

export default DashboardBtn;
