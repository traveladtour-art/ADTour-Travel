import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919811950675?text=Hello%20I%20want%20to%20book%20a%20cab%20with%20AD%20Tour%20%26%20Travel"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6  bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
    >
      <MessageCircle size={26} />
    </a>
  );
}
