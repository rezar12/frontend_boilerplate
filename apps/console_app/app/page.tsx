import type React from "react"
import { cn } from "@repo/ui/lib/utils"
import { Button } from "@repo/ui/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Label } from "@repo/ui/components/ui/label"
// image loading
import logo from "./public/logo.svg"
import Image from "next/image"


export default function Page({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Image src={logo} alt="logo" className="self-center w-32 h-32"/>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl pb-2">Bienvenue</CardTitle>
          <CardDescription>Entrez vos identifiants pour accéder à votre compte</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="username">Nom d'Utilisateur</Label>
                  <Input id="input" type="input" placeholder="Nom d'Utilisateur" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Mot de passe</Label>
                    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <Input id="password" type="password" placeholder="Mot de passe" required />
                </div>
                <Button type="submit" className="w-full h-12">
                  Connexion
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </main>
  )
}

