import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { useTheme } from "styled-components";
import { Flex } from "@/styles/common";
import { DialogWrapper } from "./styled";
import { handler } from "@material-tailwind/react/types/components/dialog";

const ModalCustom = ({
  children,
  title,
  show,
  data,
  type,
  onCloseModal,
  secondaryBtn,
  primaryBtn,
}: {
  children: React.ReactNode | React.ReactNode[];
  data?: any;
  show?: boolean | any;
  title?: string;
  type?: string;
  onCloseModal?: () => void;
  action?: (a: any, b: any) => Promise<any>;
  secondaryBtn?: {
    disable?: boolean;
    text?: string;
    onClick?: any;
  };
  primaryBtn?: {
    disable?: any;
    text?: string;
    onClick?: any;
  };
}) => {
  const theme = useTheme();

  return (
    <Dialog
      className="overflow-auto relative"
      aria-labelledby="modal-title"
      open={show}
      handler={primaryBtn && primaryBtn.onClick}
      dismiss={{
        ancestorScroll: true,
      }}
    >
      <DialogWrapper>
        <DialogHeader placeholder={undefined}>
          <Flex justify="space-between" className="w-full">
            <Typography variant="h6">{title}</Typography>
            {onCloseModal && (
              <IconButton
                color="blue-gray"
                size="sm"
                variant="text"
                onClick={onCloseModal}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-7 w-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </IconButton>
            )}
          </Flex>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>

        {secondaryBtn || primaryBtn ? (
          <DialogFooter>
            <Flex gap={16} $gapMb={16}>
              {secondaryBtn ? (
                <Button
                  disabled={secondaryBtn?.disable}
                  onClick={secondaryBtn?.onClick}
                  style={{
                    width: "140px",
                    color: "#ffffff",
                    background: theme.color.status.red,
                  }}
                >
                  {secondaryBtn?.text}
                </Button>
              ) : null}
              {primaryBtn ? (
                <Button
                  disabled={primaryBtn?.disable}
                  style={{
                    width: "140px",
                    color: "#ffffff",
                    background: theme.color.status.primary,
                  }}
                  onClick={primaryBtn?.onClick}
                >
                  {primaryBtn?.text}
                </Button>
              ) : null}
            </Flex>
          </DialogFooter>
        ) : null}
      </DialogWrapper>
    </Dialog>
  );
};

export default ModalCustom;
