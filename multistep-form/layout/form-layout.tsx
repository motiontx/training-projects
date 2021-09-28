import { useContext } from "react";
import Link from "next/link";
import {
  Button,
  Code,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import BaseLayout from "./base-layout";
import FormProvider, { FormContext } from "../component/FormProvider";

interface FormLayoutProps {
  children: React.ReactNode;
}

function CodeBlock() {
  const form = useContext(FormContext);

  return (
    <Code whiteSpace="pre-wrap" width="100%" rounded={6} p={6}>
      {JSON.stringify(form.formData.steps, null, 2)}
    </Code>
  );
}

export default function FormLayout({ children }: FormLayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BaseLayout>
      <FormProvider>
        <Link href="/" passHref>
          <Button pos="absolute" left={3} top={3}>
            {"← Back to Home"}
          </Button>
        </Link>
        <Button pos="absolute" left={3} bottom={3} onClick={onOpen}>
          Preview
        </Button>
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Preview</DrawerHeader>
            <DrawerBody>
              <CodeBlock />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        {children}
      </FormProvider>
    </BaseLayout>
  );
}
