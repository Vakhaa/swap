import { Controller, Delete, Get, Header, Param, Post } from '@nestjs/common';
import { CreateProfileDto } from 'src/Infrastructure/dto/profile.dto';
import { Profile } from 'src/Infrastructure/schemas/profile.schema';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':id')
  async getProfile(@Param('id') id: string) : Promise<Profile> {
    return this.profileService.findOne(id);
  };

  @Get()
  async getAllProfiles() : Promise<Profile[]> {
    return this.profileService.findAll();
  };
  
  @Post()
  async createProfile(): Promise<Profile>{
    return this.profileService.create( new CreateProfileDto("name code" + (Date.now()%10), 22));
  };
  
  @Delete(':id')
  async deleteProfile(@Param('id') id: string) {
    return this.profileService.delete(id);
  };
};
