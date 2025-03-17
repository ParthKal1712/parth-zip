import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogWidth,
} from "@/components/ui/dialog";
import { JSX, ReactNode, useState } from "react";

type DialogProps = {
  header: { title: ReactNode; description?: ReactNode };
  content: ReactNode;
  footer?: ReactNode;
  width?: DialogWidth;
};

type DialogReturnType = {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  DialogComponent: () => JSX.Element;
};

export const useDialog = (props: DialogProps): DialogReturnType => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const DialogComponent = () => {
    return (
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent width={props.width}>
          {!!props.header && (
            <DialogHeader>
              {!!props.header?.title && (
                <DialogTitle>{props.header?.title}</DialogTitle>
              )}
              {!!props.header?.description && (
                <DialogDescription>
                  {props.header?.description}
                </DialogDescription>
              )}
            </DialogHeader>
          )}
          {props.content}
          {!!props.footer && <DialogFooter>{props.footer}</DialogFooter>}
        </DialogContent>
      </Dialog>
    );
  };

  return { dialogOpen, setDialogOpen, DialogComponent };
};
