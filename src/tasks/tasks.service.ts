import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { JSDOM } from 'jsdom';

@Injectable()
export class TasksService {
    async scrape(url: string): Promise<string[]> {
        const response = await axios.get(url);
        const dom = new JSDOM(response.data);
        const titles = Array.from(dom.window.document.querySelectorAll('h2')).map((element) => {
          const h2Element = element as HTMLElement;
          return h2Element.textContent || '';
        });
        return titles;
      }
    
}
