import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components"

interface ContactFormEmailProps {
  message: string
  senderEmail: string
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your contact form</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>New Contact Form Message</Heading>
            <Text style={text}>You received a new message from your contact form:</Text>
            <Hr style={hr} />
            <Text style={text}>
              <strong>From:</strong> {senderEmail}
            </Text>
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageText}>{message}</Text>
            <Hr style={hr} />
            <Text style={footer}>This message was sent from your website's contact form.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
}

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "left" as const,
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
}

const text = {
  color: "#333",
  fontSize: "16px",
  margin: "24px 0",
}

const messageText = {
  color: "#333",
  fontSize: "16px",
  margin: "24px 0",
  padding: "16px",
  backgroundColor: "#f4f4f4",
  borderRadius: "4px",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  margin: "24px 0",
}
