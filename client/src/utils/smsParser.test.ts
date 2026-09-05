import { describe, expect, it } from 'vitest';
import { parseBankSMS } from './smsParser';

describe('parseBankSMS', () => {
  it('parses a debit SMS with amount and merchant', () => {
    const result = parseBankSMS(
      'Your account is debited Rs. 1,250.00 at Swiggy on 12/08/2026'
    );

    expect(result.amount).toBe(1250);
    expect(result.type).toBe('debit');
    expect(result.merchant).toBe('Swiggy');
    expect(result.date).toBe('12/08/2026');
  });

  it('parses a credit SMS with INR amount', () => {
    const result = parseBankSMS(
      'INR 25,000 credited on 2026-08-15'
    );

    expect(result.amount).toBe(25000);
    expect(result.type).toBe('credit');
    expect(result.date).toBe('2026-08-15');
  });

  it('parses masked card last four digits', () => {
    const result = parseBankSMS(
      'Rs. 799 spent at Amazon for a purchase using card XXXX1234'
    );

    expect(result.amount).toBe(799);
    expect(result.type).toBe('debit');
    expect(result.merchant).toBe('Amazon');
    expect(result.cardLast4).toBe('1234');
  });

  it('returns null fields when SMS has no recognized financial data', () => {
    const result = parseBankSMS(
      'Hello, your account statement is ready.'
    );

    expect(result.amount).toBeNull();
    expect(result.merchant).toBeNull();
    expect(result.type).toBeNull();
    expect(result.date).toBeNull();
    expect(result.cardLast4).toBeUndefined();
  });
});