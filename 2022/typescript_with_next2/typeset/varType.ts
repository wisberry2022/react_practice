import React from "react";

export interface objData {
  id: number;
  contents: string;
  cpn: React.ReactElement;
}

export interface funcType {
  (id: number): void;
}