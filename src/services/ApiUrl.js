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

degree:`${environment.baseUrl}degree`,

//---------------------- students -------------------------------------
register:`${environment.baseUrl}register`,


//---------------------- BanWords -------------------------------------
banwords:`${environment.baseUrl}banwords`,

//---------------------- Report -------------------------------------
report:`${environment.baseUrl}report`,

}