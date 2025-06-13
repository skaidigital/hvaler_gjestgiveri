import { ContactFormSchema } from "@/src/features/email/schema/contact-form-schema";
import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const Wrapper = ({ children, preview }) => (
  <Html lang="no" dir="ltr">
    <Tailwind>
      <Body className="bg-gray-100 font-sans py-[40px]">
        {preview && <Text className="hidden">{preview}</Text>}
        {children}
      </Body>
    </Tailwind>
  </Html>
);

const ContactFormEmail = ({
  name,
  work,
  email,
  phone,
  message,
}: ContactFormSchema) => {
  return (
    <Wrapper preview={`Ny kontaktskjema fra ${name}`}>
      <Container className="bg-white max-w-[600px] mx-auto p-[40px] rounded-[8px]">
        <Heading className="text-[24px] font-bold text-center mb-[16px] text-gray-800">
          Hvaler Gjestgiveri
        </Heading>
        <Heading className="text-[20px] font-bold text-center mb-[32px] text-gray-700">
          Ny kontaktskjema fra {name}
        </Heading>

        <Section className="mt-[32px] mb-[32px]">
          <Hr className="border-gray-200 my-[24px]" />

          {/* Contact Information */}
          <div className="space-y-[20px]">
            <div>
              <Text className="text-[14px] font-bold text-gray-600 mb-[4px] m-0">
                NAVN
              </Text>
              <Text className="text-[16px] text-gray-800 m-0">{name}</Text>
            </div>

            <div>
              <Text className="text-[14px] font-bold text-gray-600 mb-[4px] m-0">
                ARBEID/BEDRIFT
              </Text>
              <Text className="text-[16px] text-gray-800 m-0">{work}</Text>
            </div>

            <div>
              <Text className="text-[14px] font-bold text-gray-600 mb-[4px] m-0">
                E-POST
              </Text>
              <Text className="text-[16px] text-blue-600 m-0">{email}</Text>
            </div>

            <div>
              <Text className="text-[14px] font-bold text-gray-600 mb-[4px] m-0">
                TELEFON
              </Text>
              <Text className="text-[16px] text-gray-800 m-0">{phone}</Text>
            </div>

            <Hr className="border-gray-200 my-[24px]" />

            <div>
              <Text className="text-[14px] font-bold text-gray-600 mb-[8px] m-0">
                MELDING
              </Text>
              <div className="bg-gray-50 p-[16px] rounded-[6px] border-solid border-[1px] border-gray-200">
                <Text className="text-[16px] text-gray-800 m-0 whitespace-pre-wrap">
                  {message}
                </Text>
              </div>
            </div>
          </div>

          <Hr className="border-gray-200 my-[32px]" />

          {/* Footer */}
          <Text className="text-[12px] text-gray-500 text-center m-0">
            Denne meldingen ble sendt fra kontaktskjemaet på Hvaler Gjestgiveri
            sin nettside.
          </Text>
        </Section>
      </Container>
    </Wrapper>
  );
};

ContactFormEmail.PreviewProps = {
  name: "Ola Nordmann",
  work: "Skai Digital AS",
  email: "ola@skaidigital.com",
  phone: "+47 123 45 678",
  message:
    "Hei! Jeg er interessert i å booke et opphold hos dere i helgen. Har dere ledige rom for 2 personer fra fredag til søndag? Ser frem til å høre fra dere.\n\nMvh,\nOla",
};

export default ContactFormEmail;
