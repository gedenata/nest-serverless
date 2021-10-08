import { Injectable, LoggerService, Scope } from '@nestjs/common';
import { join } from 'path/posix';
import { Logger } from 'winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger implements LoggerService {
  private context?: string;
  private logger: Logger;

  constructor(context?: string) {
    this.context = context;
    this.initLogger();
  }

  private initLogger() {
    this.logger = winston.createLogger({
      format: this.logFormat,
      transports: [this.consoleTransport, this.dailyLogTransport],
    });
  }

  log(message: string, context?: string) {
    return this.logger.info(message, {
      ...this.getContext(context),
    });
  }

  error(message: string, trace?: string, context?: string) {
    return this.logger.error(message, {
      trace,
      ...this.getContext(context),
    });
  }

  warn(message: string, context?: string) {
    return this.logger.debug(message, {
      ...this.getContext(context),
    });
  }

  debug?(message: string, context?: string) {
    return this.logger.debug(message, {
      ...this.getContext(context),
    });
  }

  verbose?(message: string, context?: string) {
    return this.logger.verbose(message, {
      ...this.getContext(context),
    });
  }

  private get consoleTransport(): winston.transports.ConsoleTransportInstance {
    return new winston.transports.Console({
      format: winston.format.colorize({ all: true }),
    });
  }

  private get dailyLogTransport(): DailyRotateFile {
    return new DailyRotateFile({
      dirname: this.logFileDir,
      filename: '%DATE%.log',
      maxFiles: '60d',
    });
  }

  private get logFileDir(): string {
    const dirname = 'logs';
    return join(__dirname, '../../../../', '../', dirname);
  }

  private get logFormat(): winston.Logform.Format {
    return winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD, HH:mm:ss' }),
      winston.format.printf((info) => {
        const ctx = info.context ? `[${info.context}] ` : ' ';
        return `${info.timestamp} : ${info.level}${ctx}${info.message}`;
      }),
    );
  }

  private getContext(ctx?: string): { context?: string } {
    return { context: ctx || this.context || undefined };
  }
}
