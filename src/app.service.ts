import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Request } from 'express';
// axios.interceptors.request.use(request => {
//   console.log('Starting Request', JSON.stringify(request, null, 2))
//   return request
// });

// axios.interceptors.response.use(response => {
//   console.log('Response:', JSON.stringify(response, null, 2))
//   return response
// });

const WHITE_LISTS=['nolleh'];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getStats(req: Request) {
    if (!WHITE_LISTS.includes(req.query.username as string)) {
      throw new BadRequestException();
    }
    const response = await axios.get(process.env.HOST + '/api', {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "image/svg+xml",
      },
      params: req.query,
    });

    return response.data;
  }

  async getTopLangs(req: Request) {
    if (!WHITE_LISTS.includes(req.query.username as string)) {
      throw new BadRequestException();
    }
    const response = await axios.get(process.env.HOST + '/api/top-langs/', {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "image/svg+xml",
      },
      params: req.query,
    });

    return response.data;
  }
}
