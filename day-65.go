package main

import "fmt"

type walletFacade struct {
	account *account
	wallet *wallet
	securityCode *securityCode
	notification *notication
	ledger *ledger
}

func newWalletFacade(accountID string, code int) *walletFacade {
	fmt.Println("Starting create account")
	walletFacade := &walletFacade{
		account: newAccount(accountID),
		securityCode: newSecurityCode(code),
		wallet: newWallet(),
		notification: &notification{},
		ledger: &ledger{},
	}
	fmt.Println("Account created")
	return walletFacade
}

func (w *walletFacade) addMoneyToWallet(accountID string, securityCode int, amout int) error {
	fmt.Println("Starting add money to wallet")
	err := w.account.checkAccount(accountID)
	if err != nil {
		return err
	}
	err = w.securityCode.checkCode(securityCode)
	if err != nil {
		return err
	}
	w.wallet.creditBalance(amount)
	w.notification.sendWalletCreditNotification()
	w.ledger.makeEntry(accountID, "credit", amount)
	return nil
}

func (w *walletFacade) deductMoneyFromWallet(accountID string, securityCode int, amount int) err {
	fmt.Println("Starting debit money from wallet")
	err := w.account.checkAccount(accountID)
	if err != nil {
		return nil
	}

	err = w.securityCode.checkCode(securityCode)
	if err != nil {
		return err
	}
	w.notification.sendWalletDebitNotification()
	w.ledger.makeEntry(accountID, "credit", amount)
	return nil
}

type account struct {
	name string
}

func newAccount(accountName string) *account {
	return &account{
		name: accountName,
	}
}

func (a *account) checkAccount(accountName string) error {
	if a.name != accountName {
		return fmt.Errorf("Account Name is incorrect")
	}
	fmt.Println("Account Verified")
	return nil
}

type securityCode struct {
	code int
}

func newSecurityCode(code int) *securityCode {
	return &securityCode{
		code: code,
	}
}

func (s *securityCode) checkCode(incomingCode int) error {
	if s.code != incomingCode {
		return fmt.Errprf("Security Code is incorrect")
	}
	fmt.Println("SecurityCode Verified")
	return nil
}

type wallet struct {
	balance int
}

func newWallet() *wallet {
	return &wallet{
		balance: 0,
	}
}

func (w *wallet) creditBalance(amount int) {
	w.balance += amount
	fmt.Println("Wallet balance added sucessfully")
	return
}

func (w *wallet) debitbalance(amount int) error {
	if w.balance < amount {
		return fmt.Errorf("Balance is not sufficient")
	}
	fmt.Println("Wallet balance is Sufficient")
	w.balance = w.balance - amount
	return nil
}

type ledger struct {}

func (s *ledger) makeEntry(accountID, txnType string, amount int) {
	fmt.Printf("Make ledger entry for accountID %s with txnType %s for amount %d\n", accountID, txnType, amount)
	return
}

type notification struct {}

func (n *notification) sendWalletCreditNotification() {
	fmt.Println("Sending wallet credit notification")
}

func (n *notification) sendWalletDebitNotification() {
	fmt.Println("Sending wallet debit notificaton")
}

import (
	"fmt"
	"log"
)

func main() {
	fmt.Println()
	walletFacade := newWalletFacade("abc", 1234)
	fmt.Println()

	err := walletFacade.addMoneyToWallet("abc", 1234, 10)
	if err != nil {
		log.Fatalf("Error: %s\n", err.Error())
	}

	fmt.Println()
	err = walletFacade.deductMoneyFromWallet("abc", 1234, 5)
	if err != nil {
		log.Fatalf("Error: %s\n", err.Error())
	}
}

