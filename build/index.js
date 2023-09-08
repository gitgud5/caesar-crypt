"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caesarDecrypt = exports.caesarEncrypt = void 0;
// Function for encryption
// Default shift is 3
/**
 * Encrypts a message using the Caesar cipher.
 *
 * @param message - The message to encrypt.
 * @param shift - The number of positions to shift each character (default: 3).
 * @returns The encrypted message.
 */
function caesarEncrypt(message, shift = 3) {
    // Alright firstly, we are gonna make a string so that we can move the alphabets
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Function to shift the characters
    function shiftCharacter(char, shift) {
        if (char === " ") {
            // return spaces if there are only spaces.
            return " ";
        }
        const isUpperCase = char === char.toUpperCase();
        const charIndex = alphabet.indexOf(char.toUpperCase());
        // If character is not in the alphabet string, then we don't do anything to it
        if (charIndex === -1) {
            return char;
        }
        const shiftedIndex = (charIndex + shift) % 26;
        const shiftedChar = isUpperCase
            ? alphabet[shiftedIndex]
            : alphabet[shiftedIndex].toLowerCase();
        return shiftedChar;
    }
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const shiftedChar = shiftCharacter(char, shift);
        encryptedMessage += shiftedChar;
    }
    return encryptedMessage;
}
exports.caesarEncrypt = caesarEncrypt;
// Function for Decryption
// Default Shift value will be same as Encryption
/**
 * Decrypts an encrypted message using the Caesar cipher.
 *
 * @param encryptedMessage - The encrypted message to decrypt.
 * @param shift - The number of positions to shift each character (default: 3).
 * @returns The decrypted message.
 */
function caesarDecrypt(encryptedMessage, shift = 3) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function shiftCharacter(char, shift) {
        if (char === " ") {
            return " ";
        }
        const isUpperCase = char === char.toUpperCase();
        const charIndex = alphabet.indexOf(char.toUpperCase());
        if (charIndex === -1) {
            return char;
        }
        // Here we use +26 so that the value is always a positive integer. cuz sometimes it may be negative.
        const shiftedIndex = (charIndex - shift + 26) % 26;
        const shiftedChar = isUpperCase
            ? alphabet[shiftedIndex]
            : alphabet[shiftedIndex].toLowerCase();
        return shiftedChar;
    }
    let decryptedMessage = "";
    for (let i = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i];
        const shiftedChar = shiftCharacter(char, shift);
        decryptedMessage += shiftedChar;
    }
    return decryptedMessage;
}
exports.caesarDecrypt = caesarDecrypt;
const caesar = {
    caesarEncrypt,
    caesarDecrypt,
};
exports.default = caesar;
