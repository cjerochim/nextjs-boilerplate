import * as yup from "yup";

type DateRange = Date | null;

interface CreateProjectProps {
  title: string;
  type: string;
  format: string;
  dateStart: DateRange;
  dateEnd: DateRange;
  otherStart: DateRange;
  otherEnd: DateRange;
  notes: string;
  otherNotes: string;
}

export const initialValues: CreateProjectProps = {
  title: "",
  type: "",
  format: "",
  dateStart: null,
  dateEnd: null,
  otherStart: null,
  otherEnd: null,
  notes: "",
  otherNotes: "",
};

const schema = yup.object({
  title: yup.string().required(),
  type: yup.string().required(),
  format: yup.string().required(),
  dateStart: yup.date().nullable(),
  dateEnd: yup.date().nullable(),
  otherStart: yup.date().nullable(),
  otherEnd: yup.date().nullable(),
  notes: yup.string(),
  otherNotes: yup.string(),
});

export default schema;
