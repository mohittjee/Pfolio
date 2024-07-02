"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import {motion} from "framer-motion";
import { SizeIcon } from "@radix-ui/react-icons";

export default function Calcom(){
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("floatingButton", {"calLink":"offsense/15min","buttonText":"Book my Cal","hideButtonIcon":false,"buttonColor":"#ffffff","buttonTextColor":"#000000", "buttonPosition":"bottom-right", });
		cal("ui", {"theme":"auto","styles":{"branding":{"brandColor":"#E32A0C"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return(
		<div/>
	)
  };
  