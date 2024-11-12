export const checkIfUserIsAdmin = (email) => {
    const adminEmails = ["anil010203044@gmail.com"];
    return adminEmails.includes(email); // Check if the email is in the admin list
  };
  