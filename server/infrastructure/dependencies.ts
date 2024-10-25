import { UserRepositoryImpl } from "./repositories/userRepository";
import { UserController } from "../application/controller/userController";
import { UserInterceptor } from "./httpInterceptors/userInterceptor";
import { UserService } from "../domain/services/userService";

export const userInterceptor = async () => {

    const userRepository = new UserRepositoryImpl() // Se crea la implementacion del repositorio

    const userService = new UserService(userRepository) // Se crea el servicio y se le inyecta el repositorio para que use sus metodos sin conocer implementacion
    const userController = new UserController(userService) // Se crea el controlador y se le inyectan los servicios del dominio para controlar el caso de uso
    return new UserInterceptor(userController) // Creamos el interceptor y le pasamos la instancia del controlador para que utilice sus metodos segun el endpoint

}

