import { useEffect } from "react";
import { useForm } from "react-hook-form";
/* import { createTasks, deleteTask, updateTask, getTask } from "../api/tasks.api"; */
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";


export function CrearPaciente() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();


}