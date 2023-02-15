import { FormGroup } from "@angular/forms"

export default function userAndPassAreEqualValidator(form: FormGroup) {
    const username: string = form.get('userName')?.value ?? "";
    const password: string = form.get('password')?.value ?? "";

    if(username.trim() + password.trim()) {
        return username === password ? {userAndPassAreEqual: true} : null
    } else {
        return null
    }
}