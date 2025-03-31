import Image from "next/image";
import styles from "./page.module.css";
// import Header from "@/app/components/Header/page";

export default function Home() {
  return (
      <p>{process.env.ENV_BROWSE}</p>
);
}
