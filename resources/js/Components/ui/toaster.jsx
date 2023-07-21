import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export function Toaster() {
  const { toasts,toast } = useToast()
  const {success,error} = usePage().props

  useEffect(() => {
    if(success){
      toast({
        title: "Success",
        description: success,
      })
    } else if(error){
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      })
    }
  }, [success,error])

  return (
    (<ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          (<Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>)
        );
      })}
      <ToastViewport />
    </ToastProvider>)
  );
}
