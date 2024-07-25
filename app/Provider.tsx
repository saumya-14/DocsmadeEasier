"use client";
import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUsers } from "@/lib/actions/user.actions";
//   publicApiKey={"pk_dev_nsm5bYHA0kIbIpogIVXNKR634fKYORyzYLzfNraMtEF9RFtHrYqGYejU2D9ifH-G"}

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth" resolveUsers={async({userIds})=>{
      const users= await getClerkUsers({userIds});

      return users;
    }}>
     
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
      
    </LiveblocksProvider>
  )
}

export default Provider