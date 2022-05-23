import { useContext } from "react";
import ServiceContext from "../context/serviceContext";

export default function useService() {
  return useContext(ServiceContext);
}
