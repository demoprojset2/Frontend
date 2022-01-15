# Generated by Django 4.0 on 2022-01-15 08:46

from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PatientDetails',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('email_id', models.EmailField(max_length=254, unique=True)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('T', 'Trans')], default='M', max_length=1)),
                ('address', models.CharField(max_length=255)),
                ('dob', models.DateTimeField()),
                ('phone_number', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None)),
                ('doctor', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.profile')),
            ],
        ),
        migrations.CreateModel(
            name='VitalDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weight', models.FloatField()),
                ('height', models.IntegerField()),
                ('blood_pressure', models.FloatField(blank=True)),
                ('pulse', models.FloatField(blank=True)),
                ('date_added', models.DateTimeField(auto_now_add=True)),
                ('temperature', models.FloatField(blank=True)),
                ('patient', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='backend.patientdetails')),
            ],
        ),
        migrations.CreateModel(
            name='SocialHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tobacco', models.CharField(choices=[('1', 'Never Smoked'), ('2', 'Current Smoker'), ('3', 'Former Smoker')], default='Never Smoked', max_length=100)),
                ('alcohol', models.CharField(choices=[('1', 'Current drinker'), ('2', 'Former drinker'), ('3', 'Lifetime Non-drinker')], default='Current Drinker', max_length=100)),
                ('patient', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='patient_smoker', to='backend.patientdetails')),
            ],
        ),
        migrations.CreateModel(
            name='ProblemDetails',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('problem_name', models.TextField()),
                ('severity', models.CharField(choices=[('1', 'Mild'), ('2', 'Moderate'), ('3', 'Severe')], default='Mild', max_length=10)),
                ('status', models.CharField(choices=[('A', 'Active'), ('R', 'Resolved')], default='Active', max_length=15)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='problem_patient', to='backend.patientdetails')),
            ],
        ),
        migrations.CreateModel(
            name='Medication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medication_name', models.CharField(max_length=40)),
                ('medication_manufacturer', models.CharField(max_length=40)),
                ('expire', models.DateTimeField()),
                ('amount', models.DecimalField(decimal_places=2, max_digits=6)),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='patient_med', to='backend.patientdetails')),
            ],
        ),
        migrations.CreateModel(
            name='Dosage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dose_amount', models.PositiveSmallIntegerField()),
                ('dose_timing', models.CharField(choices=[('Per Day', '1/d'), ('Per Half Day', '1/h'), ('Per Quater Hour', '1/Q')], max_length=20)),
                ('dose_description', models.TextField()),
                ('medication', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='med', to='backend.medication')),
            ],
        ),
        migrations.CreateModel(
            name='Allergy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('substance', models.CharField(blank=True, max_length=30, null=True)),
                ('verification_status', models.CharField(choices=[('1', 'Suspected'), ('2', 'Likely'), ('3', 'Confirmed'), ('4', 'Resolved'), ('5', 'Refuted')], max_length=40)),
                ('criticality', models.CharField(choices=[('1', 'LOW'), ('2', 'MEDIUM'), ('3', 'HIGH')], max_length=40)),
                ('type', models.CharField(choices=[('1', 'Allergy'), ('2', 'Intolerance')], max_length=40)),
                ('comment', models.TextField(blank=True)),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='patient_allergy', to='backend.patientdetails')),
            ],
        ),
    ]
