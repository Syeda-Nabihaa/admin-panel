import { environment } from "../environment/environment";

export const AllApiEndPoints = {
login: `${environment.baseUrl}auth/login`,
getProfile: `${environment.baseUrl}auth/me`,

//---------------------- UNIVERSITY -----------------------------------
university: `${environment.baseUrl}univeristy`,

//---------------------- Users ----------------------------------------
addUsers :`${environment.baseUrl}auth/admin/signUp`,
getUsers :`${environment.baseUrl}user`,

//---------------------- Upload --------------------------------------
upload :`${environment.baseUrl}media/upload`,

//---------------------- Badge -------------------------------------
badge:`${environment.baseUrl}badge`,

degree:`${environment.baseUrl}degree`
}