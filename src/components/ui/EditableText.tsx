"use client";

import { Pencil } from "lucide-react";
import { useState } from "react";

type EditableTextProps = {
  value: string;
  onSave: (value: string) => void;
  className?: string;
  multiline?: boolean;
  placeholder?: string;
  editMode: boolean;
};

export function EditableText({
  value,
  onSave,
  className,
  multiline,
  placeholder,
  editMode,
}: EditableTextProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const save = () => {
    onSave(draft.trim() || placeholder || "");
    setEditing(false);
  };

  if (!editMode && !editing) return <span className={className}>{value || placeholder}</span>;

  if (editing) {
    return multiline ? (
      <textarea
        className={`w-full rounded-xl border border-white/20 bg-white/10 p-3 text-sm outline-none backdrop-blur ${className ?? ""}`}
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        onBlur={save}
        rows={4}
        autoFocus
      />
    ) : (
      <input
        className={`w-full rounded-xl border border-white/20 bg-white/10 p-2 text-sm outline-none backdrop-blur ${className ?? ""}`}
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        onBlur={save}
        onKeyDown={(event) => {
          if (event.key === "Enter") save();
          if (event.key === "Escape") setEditing(false);
        }}
        autoFocus
      />
    );
  }

  return (
    <button
      type="button"
      className="group inline-flex items-center gap-2 text-left"
      onClick={() => {
        setDraft(value);
        setEditing(true);
      }}
    >
      <span className={className}>{value || placeholder}</span>
      <Pencil className="h-3.5 w-3.5 opacity-45 transition-opacity group-hover:opacity-100" />
    </button>
  );
}
