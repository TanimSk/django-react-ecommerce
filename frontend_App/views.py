from django.shortcuts import render

# Create your views here.
def main(req):
    return render(req, 'root.html')