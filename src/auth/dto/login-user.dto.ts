import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';

export class LoginUserRequestDto {
  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(33)
  province: number;
}
