import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fpbffjbhosvcjhcrxdxt.supabase.co/rest/v1/',

  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwYmZmamJob3N2Y2poY3J4ZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3OTczOTAsImV4cCI6MTk5MTM3MzM5MH0.vIkuQYhX7vrDUEcrbxMMxFkIonPumROtzfdff25pLO8',
  },
});
