import http from 'k6/http';
import { sleep } from 'k6';

export const options = {

  vus: 30,
  duration: '3m',
  ext: {
    loadimpact: {
      projectID: 1234567,
      name: 'Test Echo (20/01/2024)'
    }
  }
};

export default function() {
  http.get('https://any-public-ip.ngrok-free.app');
  sleep(1);
}