import { DataSource } from 'typeorm';
import { AppDataSource } from './data-source'; // adjust to your setup

async function seed() {
  await AppDataSource.initialize();

  const userRepo = AppDataSource.getRepository('User');
  const vehicleRepo = AppDataSource.getRepository('Vehicle');
  const driverRepo = AppDataSource.getRepository('Driver');

  // Demo Users
  await userRepo.save([
    { email: 'admin@demo.com', password: 'demo123', role: 'ADMIN' },
    { email: 'manager@demo.com', password: 'demo123', role: 'MANAGER' }
  ]);

  // Demo Vehicles
  await vehicleRepo.save([
    { plateNumber: 'MH12AB1234', status: 'ACTIVE' },
    { plateNumber: 'MH14CD5678', status: 'MAINTENANCE' }
  ]);

  // Demo Drivers
  await driverRepo.save([
    { name: 'Rahul Patil', status: 'ACTIVE' },
    { name: 'Amit Sharma', status: 'ON_LEAVE' }
  ]);

  console.log('✅ Seed data inserted');
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Seed failed', err);
  process.exit(1);
});
