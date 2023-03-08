import Form from "@/components/Form";

import bg from "../../../public/images/ue-background.png";

export default function SurveyPage() {
  return (
    <div
      style={{
        background: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="h-screen px-4 md:px-0 overflow-auto"
    >
      <Form formId="141" />
    </div>
  );
}
