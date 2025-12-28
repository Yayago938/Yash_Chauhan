export const emailvalidate = {
    required: "Email is required",
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format"
    }
}
export const passwordvalidate = {
    required: "Password cannot be empty",
    pattern: {
        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        message: "Must have at least 1 uppercase, 1 number, 1 special character "
    },
    minLength: {
        value: 8,
        message: "Minimum length required is 8",
    }

}

export const usernamevalidate = {
    required: "Username cannot be empty",
     pattern: {
        value: /^[A-Za-z0-9_]+$/,
        message: "Only letters, numbers and underscore allowed"
    },
     minLength: { value: 3, message: "Minlength is 3" }, 
     maxLength: { value: 15, message: "maxlength is 8" }
}
export const gendervalidate = {
    required: "Gender is required",
    pattern: {
        value: /^(male|female|other)$/i,
        message: "Gender must be Male, Female, or Other"
    }
};
export const dobvalidate = {
    required: "Date of birth is required",
    pattern: {
        value: /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
        message: "Date must be in DD-MM-YYYY format"
    }
};

