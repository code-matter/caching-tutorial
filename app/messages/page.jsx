// import { unstable_noStore } from "next/cache";
import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// File based cache config. Needs to be named 'revalidate' || dynamic
// export const revalidate = 5;
// export const dynamic = "force-dynamic" //=> like cache:'no-store';

export default async function MessagesPage() {
  // unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: {
  //     // revalidate: 5, // Revalidate every 5s
  //     tags: ["msg"],
  //   },
  // });
  // const messages = await response.json();

  const messages = getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
