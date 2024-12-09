import {Alert} from 'react-native';
import {showMessage} from 'react-native-flash-message';

export type ValidationType = {
  code?: string;
  email?: string;
  cardCvv?: string;
  comment?: string;
  address?: string;
  country?: string;
  password?: string;
  userName?: string;
  location?: string;
  lastName?: string;
  cardYear?: string;
  promocode?: string;
  firstName?: string;
  cardMonth?: string;
  cardNumber?: string;
  phoneNumber?: string;
  orderNumber?: string;
  confirmPassword?: string;
};

export const validation = ({
  code,
  email,
  country,
  comment,
  address,
  cardYear,
  userName,
  password,
  location,
  cardMonth,
  promocode,
  firstName,
  cardNumber,
  phoneNumber,
  orderNumber,
  confirmPassword,
}: ValidationType) => {
  let isValid = true;

  if (userName !== undefined) {
    if (userName === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill name field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }

    if (userName.length < 3) {
      showMessage({
        message: 'Error',
        description: 'Name must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (firstName !== undefined) {
    if (firstName === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill first name field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (firstName.length < 3) {
      showMessage({
        message: 'Error',
        description: 'First name must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (email !== undefined) {
    if (email === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill email field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      showMessage({
        message: 'Error',
        description: 'Email address is invalid',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (password !== undefined) {
    if (password === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill password field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (password.length < 6) {
      showMessage({
        message: 'Error',
        description: 'Password must be at least 6 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (confirmPassword !== undefined) {
    if (confirmPassword === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill confirm password field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (password !== confirmPassword) {
      showMessage({
        message: 'Error',
        description: 'Passwords do not match',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (phoneNumber !== undefined) {
    if (phoneNumber === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill phone number field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else {
      if (phoneNumber.length < 9) {
        showMessage({
          message: 'Error',
          description: 'Phone number must be at least 9 characters',
          type: 'danger',
          icon: 'danger',
        });
        isValid = false;
        return isValid;
      }
      if (phoneNumber.length > 15) {
        showMessage({
          message: 'Error',
          description: 'Phone number must be less than 15 characters',
          type: 'danger',
          icon: 'danger',
        });
        isValid = false;
        return isValid;
      }
    }
  }

  if (code !== undefined) {
    if (code === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill OTP field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (code.length < 5) {
      showMessage({
        message: 'Error',
        description: 'OTP must be at least 5 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (country !== undefined) {
    if (country === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill country field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (country.length < 3) {
      showMessage({
        message: 'Error',
        description: 'Country must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (location !== undefined) {
    if (location === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill location field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (location.length < 3) {
      showMessage({
        message: 'Error',
        description: 'Location must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (promocode !== undefined) {
    if (promocode === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill promocode field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (promocode.length < 3) {
      showMessage({
        message: 'Error',
        description: 'Promocode must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (address !== undefined) {
    if (address === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill address field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (address.length < 3) {
      showMessage({
        message: 'Error',
        description: 'Address must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (cardNumber !== undefined) {
    if (cardNumber === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill card number field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (cardNumber.length < 3) {
      showMessage({
        message: 'Error',
        description: 'Card number must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (cardMonth !== undefined) {
    if (cardMonth === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill card month field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (cardMonth.length < 1) {
      showMessage({
        message: 'Error',
        description: 'Card month must be at least 2 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (comment !== undefined) {
    if (comment === '') {
      showMessage({
        message: 'Error',
        description: 'Please fill comment field',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    } else if (comment.length < 3) {
      showMessage({
        message: 'Error',
        description: 'Comment must be at least 3 characters',
        type: 'danger',
        icon: 'danger',
      });
      isValid = false;
      return isValid;
    }
  }

  if (orderNumber !== undefined) {
    if (orderNumber === '') {
      Alert.alert('Error', 'Please fill order number field', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
      isValid = false;
      return isValid;
    } else if (orderNumber.length < 3) {
      Alert.alert('Error', 'Order number must be at least 3 characters', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
      isValid = false;
      return isValid;
    }
  }

  return isValid;
};
