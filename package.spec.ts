import { describe, expect, it } from 'vitest';
import packageJson from './package.json';

describe('package.json', () => {
  it('should have the correct name', () => {
    expect(packageJson.name).toBe('bolt');
  });

  it('should have the correct description', () => {
    expect(packageJson.description).toBe('An AI Agent');
  });

  it('should have the correct license', () => {
    expect(packageJson.license).toBe('MIT');
  });

  it('should have a version', () => {
    expect(packageJson.version).toBeDefined();
    expect(typeof packageJson.version).toBe('string');
  });

    it('should have type module', () => {
    expect(packageJson.type).toBe('module');
  });

  it('should have engines', () => {
    expect(packageJson.engines).toBeDefined();
    expect(packageJson.engines.node).toBeDefined();
    expect(packageJson.engines.node).toMatch(/^>=/);
  });

  it('should have packageManager', () => {
    expect(packageJson.packageManager).toBeDefined();
    expect(typeof packageJson.packageManager).toBe('string');    
  });

  it('should have scripts', () => {    
    expect(packageJson.scripts).toBeDefined();
    expect(typeof packageJson.scripts).toBe('object');    
    expect(packageJson.scripts.deploy).toBeDefined();
    expect(packageJson.scripts.build).toBeDefined();
    expect(packageJson.scripts.dev).toBeDefined();
    expect(packageJson.scripts.test).toBeDefined();
    expect(packageJson.scripts.start).toBeDefined();    
  });

  it('should have dependencies', () => {    
    expect(packageJson.dependencies).toBeDefined();
    expect(typeof packageJson.dependencies).toBe('object');    
    expect(Object.keys(packageJson.dependencies).length).toBeGreaterThan(0);    
  });

  it('should have devDependencies', () => {    
    expect(packageJson.devDependencies).toBeDefined();
    expect(typeof packageJson.devDependencies).toBe('object');    
    expect(Object.keys(packageJson.devDependencies).length).toBeGreaterThan(0);
  });
});