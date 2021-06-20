package com.student.common.utils;

import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

public class ValidateCodeUtil {

    private final static String DES = "DES";

    private static byte[] iv = {1, 2, 3, 4, 5, 6, 7, 8};

    public static String getValidateCode() {
        Integer validateCode = (int) (Math.random() * (900000 - 1) + 100000);
        return validateCode.toString();
    }

    /**
     * Description 根据键值进行加密
     *
     * @param data
     * @param key  加密键byte数组
     * @return
     * @throws Exception
     */
    public static String encrypt(String encryptData, String encryptKey) throws Exception {

        IvParameterSpec zeroIv = new IvParameterSpec(iv);

        SecretKeySpec key = new SecretKeySpec(encryptKey.getBytes(), DES);

        Cipher cipher = Cipher.getInstance("DES/CBC/PKCS5Padding");

        cipher.init(Cipher.ENCRYPT_MODE, key, zeroIv);

        byte[] encryptedData = cipher.doFinal(encryptData.getBytes());

        return Base64.getEncoder().encodeToString(encryptedData);
    }

    /**
     * Description 根据键值进行解密
     *
     * @param data
     * @param key  加密键byte数组
     * @return
     * @throws Exception
     */
    public static String decrypt(String decryptString, String decryptKey) throws Exception {

        byte[] byteMi = Base64.getDecoder().decode(decryptString);

        IvParameterSpec zeroIv = new IvParameterSpec(iv);

        SecretKeySpec key = new SecretKeySpec(decryptKey.getBytes(), DES);

        Cipher cipher = Cipher.getInstance("DES/CBC/PKCS5Padding");

        cipher.init(Cipher.DECRYPT_MODE, key, zeroIv);

        byte decryptedData[] = cipher.doFinal(byteMi);

        return new String(decryptedData);

    }

}
