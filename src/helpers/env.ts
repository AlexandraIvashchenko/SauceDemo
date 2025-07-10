import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(__dirname, '../../.env')});

function isString(value: unknown):value is string{
    return typeof value === 'string';
}

export function getEnvironmentVariable(key: string, required: boolean): string {
    const value = process.env[key];
    if (required && !isString(value)){
        throw Error(`Missing environment variable ${key}`);
    }
    if ((isString(value))){
        return value;
    }
    return ''
}
