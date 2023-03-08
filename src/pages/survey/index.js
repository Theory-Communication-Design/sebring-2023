import Form from "@/components/Form";

import bg from "../../../public/images/ue-background.png";

export default function SurveyPage() {
  return (
    <div
      style={{
        background: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <Form formId="141" />
    </div>
  );
}
