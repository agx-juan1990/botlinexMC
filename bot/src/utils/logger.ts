
import winston from 'winston';
const { combine, timestamp, printf, colorize } = winston.format;
const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});
export const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp({format:'YYYY-MM-DD HH:mm:ss'}), myFormat),
  transports: [
    new winston.transports.Console({ format: combine(colorize(), timestamp(), myFormat) }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});
export const logInfo = (msg:string)=> logger.info(`[INFO] ${msg}`);
export const logError = (msg:string, err?:any)=> logger.error(`[ERROR] ${msg} ${err? '- '+ (err.message||err): ''}`);
export const logWarn = (msg:string)=> logger.warn(`[WARN] ${msg}`);
