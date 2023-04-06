import { useLocation } from "react-router-dom";

export default function checkRoute() {
  return useLocation().pathname;
}
