import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/elements/UI/AlertDialog';

const MobileAlertMessage = () => (
  <AlertDialog open={true}>
    <AlertDialogContent asChild>
      <AlertDialogHeader>
        <AlertDialogTitle>Ουπς!</AlertDialogTitle>
        <AlertDialogDescription>
          Φαίνεται ότι προσπαθείτε να χρησιμοποιήσετε την εφαρμογή από κινητό. Η εφαρμογή όμως προορίζεται για
          χρήση από υπολογιστή, στο πλαίσιο του Codeweek 🙂
        </AlertDialogDescription>
      </AlertDialogHeader>
    </AlertDialogContent>
  </AlertDialog>
);

export default MobileAlertMessage;
