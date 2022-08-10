import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProfileDto } from 'src/Infrastructure/dto/profile.dto';
import { ProfilDocument, Profile } from 'src/Infrastructure/schemas/profile.schema';

@Injectable()
export class ProfileService {

  constructor(
    @InjectModel(Profile.name) private readonly profileModel: Model<ProfilDocument>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const createProfile = await this.profileModel.create(createProfileDto);
    return createProfile;
  }

  async findAll(): Promise<Profile[]> {
    return this.profileModel.find().exec();
  }

  async findOne(id: string): Promise<Profile> {
    return this.profileModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedProfile = await this.profileModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedProfile;
  }
}
