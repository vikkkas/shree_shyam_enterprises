"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { sendEmail } from "@/app/actions"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)

    setIsSubmitting(false)
    setSubmitMessage(result.message)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
      {submitMessage && (
        <div
          className={`mt-4 text-center ${submitMessage.includes("successfully") ? "text-green-600" : "text-red-600"}`}
        >
          {submitMessage}
        </div>
      )}
    </form>
  )
}

