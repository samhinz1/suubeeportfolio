"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import EmailCollectionModal from "./EmailCollectionModal"

interface EmailModalContextType {
  openEmailModal: () => void
  closeEmailModal: () => void
  isEmailModalOpen: boolean
}

const EmailModalContext = createContext<EmailModalContextType | undefined>(undefined)

export function useEmailModal() {
  const context = useContext(EmailModalContext)
  if (context === undefined) {
    throw new Error("useEmailModal must be used within an EmailModalProvider")
  }
  return context
}

interface EmailModalProviderProps {
  children: ReactNode
}

export function EmailModalProvider({ children }: EmailModalProviderProps) {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  const openEmailModal = () => {
    setIsEmailModalOpen(true)
  }

  const closeEmailModal = () => {
    setIsEmailModalOpen(false)
  }

  return (
    <EmailModalContext.Provider
      value={{
        openEmailModal,
        closeEmailModal,
        isEmailModalOpen,
      }}
    >
      {children}
      <EmailCollectionModal
        isOpen={isEmailModalOpen}
        onClose={closeEmailModal}
      />
    </EmailModalContext.Provider>
  )
}
