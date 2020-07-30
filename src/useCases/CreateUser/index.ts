import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgressUserRepository } from "../../repositories/implemetations/PostgressUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapProvider = new MailtrapMailProvider()
const postgresUserRepository = new PostgressUserRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUserRepository,
    mailtrapProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController}